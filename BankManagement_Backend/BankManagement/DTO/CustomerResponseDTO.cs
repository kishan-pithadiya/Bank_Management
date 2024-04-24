namespace BankManagement.DTO
{
    public class CustomerResponseDTO
    {
        public int CustomerId { get; set; }
        public string CustomerFirstName { get; set; } = null!;
        public string CustomerLastName { get; set; } = null!;
        public DateTime CustomerDateOfBirth { get; set; }
        public string CustomerEmail { get; set; } = null!;
        public string CustomerPincode { get; set; } = null!;
        public string CustomerCountry { get; set; } = null!;
        public string CustomerAdharNumber { get; set; } = null!;
    }
}
