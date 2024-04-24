using AutoMapper;
using BankManagement.DTO;
using BankManagement.Managers.Interfaces;
using BankManagement.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Principal;

namespace BankManagement.Managers
{
    public class CustomerManager : ICustomerManager
    {
        private readonly DB_BankManagementContext _context;
        private readonly IMapper _mapper;

        public CustomerManager(DB_BankManagementContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<List<CustomerResponseDTO>> GetAllCustomersAsync()
        {
            var customers = await _context.Customers.ToListAsync();
            return _mapper.Map<List<CustomerResponseDTO>>(customers);
        }

        public async Task<CustomerResponseDTO> GetCustomerByIdAsync(int customerId)
        {
            var customer = await _context.Customers.FirstOrDefaultAsync(c => c.CustomerId == customerId);
            return _mapper.Map<CustomerResponseDTO>(customer);
        }

        public async Task<List<CustomerWithAccountDetailDTO>> GetCustomerWithAccountDetails(int custId)
        {
           var res = await _context.Customers
              .Where(customer => customer.CustomerId == custId) // Filter by specific customer ID
              .GroupJoin(
                  _context.Accounts,
                  customer => customer.CustomerId,
                  account => account.CustomerId,
                  (customer, accounts) => new { Customer = customer, Account = accounts }
              )
              .SelectMany(
                  group => group.Account.DefaultIfEmpty(),
                  (group, account) => new CustomerWithAccountDetailDTO()
                  {                
                      CustomerFirstName = group.Customer.CustomerFirstName,
                      CustomerLastName = group.Customer.CustomerLastName,
                      CustomerDateOfBirth = group.Customer.CustomerDateOfBirth,
                      CustomerEmail = group.Customer.CustomerEmail,
                      CustomerPincode = group.Customer.CustomerPincode,
                      CustomerCountry = group.Customer.CustomerCountry,
                      CustomerAdharNumber = group.Customer.CustomerAdharNumber,
                      AccountNumber = account != null ? account.AccountNumber : null,
                      AccountTypeName = account != null ? account.AccountType.AccountTypeName : null,// Default to null if account is null// Default to null if account is null 
                      AccountInterestRate = account != null ? account.AccountType.AccountInterestRate : 0,
                      AccountBalance = account != null ? account.AccountBalance : 0, // Default to 0 if account is null                                              
                  }


              )
              .ToListAsync();            
            return res;



        }

        public async Task<string> CreateCustomerAsync(CustomerRequestDTO newcust)
        {
            if (newcust == null)
            {
                return "Invalid input: Customer details are null.";
            }
            if (newcust.CustomerPincode?.Length != 6)
            {
                return "Invalid pin code: Pin code must be 6 digits.";
            }
            if (newcust.CustomerAdharNumber?.Length != 12)
            {
                return "Invalid Aadhar number: Aadhar number must be 12 digits.";
            }
            if (newcust.CustomerDateOfBirth.Year < 1900)
            {
                return "Invalid date of birth: Year must be 1900 or later.";
            }
            var newCustomer = _mapper.Map<Customer>(newcust);
            _context.Customers.Add(newCustomer);
            await _context.SaveChangesAsync();
           
            return "Customer Added Successfully!";
        } 


        public async Task<bool> UpdateCustomerAsync(int customerId, CustomerRequestDTO updateCustomer)
        {
            var existingCustomer = await _context.Customers.FirstOrDefaultAsync(c => c.CustomerId == customerId);

            if (existingCustomer != null)
            {
                _mapper.Map(updateCustomer, existingCustomer);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<bool> DeleteCustomerAsync(int customerId)
        {
            var customerToDelete = await _context.Customers.FirstOrDefaultAsync(c => c.CustomerId == customerId);
           
            if (customerToDelete != null)
            {  
                _context.Customers.Remove(customerToDelete);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }



    }
}
