using BankManagement.DTO;
using BankManagement.Managers.Interfaces;
using BankManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
namespace BankManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerManager _customerManager;
        public CustomerController(ICustomerManager customerManager) 
        { 
            _customerManager = customerManager;
        }

        [HttpGet("GetAllCustomers")]
        public async Task<IActionResult> GetAllCustomers()
        {
            Log.Information("Getting All Customers");
            var getallcust = await _customerManager.GetAllCustomersAsync();
            return Ok(getallcust);
        }

        [HttpGet("GetCustomerById")]
        public async Task<IActionResult> GetCustomerById(int CustomerId)
        {
            Log.Information("Getting Customer");
            var getcustbyid = await _customerManager.GetCustomerByIdAsync(CustomerId);
            if (getcustbyid != null)
            {
                return Ok(getcustbyid);
            }
            else
            {
                return BadRequest();
            }
            
        }

        [HttpGet("GetCustomerWithAccountDetails")]
        public async Task<IActionResult> GetCustomerWithAccountDetail(int CustomerId)
        {
            Log.Information("Getting Customer With Account");
            var getcustwithaccbyid = await _customerManager.GetCustomerWithAccountDetails(CustomerId);
            if (getcustwithaccbyid.Count==0)
            {
                
                return BadRequest();
            }
            else
            {
                return Ok(getcustwithaccbyid);
            }
           
        }

        [HttpPost("CreateCustomer")]
        public async Task<IActionResult> CreateCustomer(CustomerRequestDTO newcust)
        {
            Log.Information("Create Customer");
            return Ok(await _customerManager.CreateCustomerAsync(newcust));        
        }

        [HttpPut("UpdateCustomer")]
        public async Task<IActionResult> UpdateCustomer(int customerId, CustomerRequestDTO updatecust)
        {
            Log.Information("Update Customer");
            var updatecustomer = await _customerManager.UpdateCustomerAsync(customerId,updatecust);
            if (updatecustomer != false)
            {
                return Ok("Customer Updated Successfully!");
            }
            return Ok($"Customer With Customer Id: {customerId} Not Found!");
        }

        [HttpDelete("DeleteCustomer")]
        public async Task<IActionResult> DeleteCustomer(int customerId)
        {
            Log.Information("Delete Customer");
            var deletecustomer = await _customerManager.DeleteCustomerAsync(customerId);
            if (deletecustomer != false)
            {
                return Ok("Customer Deleted Successfully!");
            }
            return Ok($"Customer With Customer Id: {customerId} Not Found!");
        }


    }
}
