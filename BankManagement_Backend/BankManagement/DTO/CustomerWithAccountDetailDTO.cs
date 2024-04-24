namespace BankManagement.DTO
{
    public class CustomerWithAccountDetailDTO
    {
        public string CustomerFirstName { get; set; } = null!;
        public string CustomerLastName { get; set; } = null!;
        public DateTime CustomerDateOfBirth { get; set; }
        public string CustomerEmail { get; set; } = null!;
        public string CustomerPincode { get; set; } = null!;
        public string CustomerCountry { get; set; } = null!;
        public string CustomerAdharNumber { get; set; } = null!;
        public string AccountNumber { get; set; } = null!;    
        public string AccountTypeName { get; set; } = null!;
        public decimal AccountInterestRate { get; set; }
        public decimal AccountBalance { get; set; }      
        
    }
}
