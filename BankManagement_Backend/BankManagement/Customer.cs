using System;
using System.Collections.Generic;

namespace BankManagement
{
    public partial class Customer
    {
        public Customer()
        {
            Accounts = new HashSet<Account>();
        }

        public int CustomerId { get; set; }
        public string CustomerFirstName { get; set; } = null!;
        public string CustomerLastName { get; set; } = null!;
        public DateTime CustomerDateOfBirth { get; set; }
        public string CustomerEmail { get; set; } = null!;
        public string CustomerPincode { get; set; } = null!;
        public string CustomerCountry { get; set; } = null!;
        public string CustomerAdharNumber { get; set; } = null!;

        public virtual ICollection<Account> Accounts { get; set; }
    }
}
