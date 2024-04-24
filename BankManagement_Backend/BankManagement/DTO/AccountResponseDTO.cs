using BankManagement.Models;

namespace BankManagement.DTO
{
    public class AccountResponseDTO
    {
        public int AccountId { get; set; }
        public string AccountNumber { get; set; } = null!;
        public int CustomerId { get; set; }
        public int AccountTypeId { get; set; }
        public decimal AccountBalance { get; set; }
        public DateTime AccountCreateDate { get; set; }
    }
}
