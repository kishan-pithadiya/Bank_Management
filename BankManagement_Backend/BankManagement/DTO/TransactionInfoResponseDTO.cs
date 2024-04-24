namespace BankManagement.DTO
{
    public class TransactionInfoResponseDTO
    {
        public int AccountId { get; set; }
        public string TransactionType { get; set; } = null!;
        public decimal Amount { get; set; }
        public DateTime? TransactionDate { get; set; }
    }
}
