using BankManagement.DTO;

namespace BankManagement.Managers.Interfaces
{
    public interface ICustomerManager
    {
        Task<List<CustomerResponseDTO>> GetAllCustomersAsync();
        Task<CustomerResponseDTO> GetCustomerByIdAsync(int customerId);
        Task<String> CreateCustomerAsync(CustomerRequestDTO newcust);
        Task<bool> UpdateCustomerAsync(int customerId, CustomerRequestDTO updateCustomer);
        Task<bool> DeleteCustomerAsync(int customerId);
        Task<List<CustomerWithAccountDetailDTO>> GetCustomerWithAccountDetails(int custId);
    }
}