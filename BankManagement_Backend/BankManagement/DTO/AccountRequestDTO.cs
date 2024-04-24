namespace BankManagement.DTO
{
    public class AccountRequestDTO
    {
        public int CustomerId { get; set; }
        public int AccountTypeId { get; set; }
        public decimal AccountBalance { get; set; }
    }
}
