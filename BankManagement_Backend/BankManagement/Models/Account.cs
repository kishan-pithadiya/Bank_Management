using System;
using System.Collections.Generic;

namespace BankManagement.Models
{
    public partial class Account
    {
        public int AccountId { get; set; }
        public string AccountNumber { get; set; } = null!;
        public int CustomerId { get; set; }
        public int AccountTypeId { get; set; }
        public decimal AccountBalance { get; set; }
        public DateTime AccountCreateDate { get; set; }

        public virtual AccountType AccountType { get; set; } = null!;
        public virtual Customer Customer { get; set; } = null!;
    }
}
