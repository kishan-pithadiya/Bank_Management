using System;
using System.Collections.Generic;

namespace BankManagement
{
    public partial class AccountType
    {
        public AccountType()
        {
            Accounts = new HashSet<Account>();
        }

        public int AccountTypeId { get; set; }
        public string AccountTypeName { get; set; } = null!;
        public decimal AccountInterestRate { get; set; }

        public virtual ICollection<Account> Accounts { get; set; }
    }
}
