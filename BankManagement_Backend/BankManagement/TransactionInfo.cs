using System;
using System.Collections.Generic;

namespace BankManagement
{
    public partial class TransactionInfo
    {
        public int TransactionId { get; set; }
        public int AccountId { get; set; }
        public string TransactionType { get; set; } = null!;
        public decimal Amount { get; set; }
        public DateTime? TransactionDate { get; set; }
    }
}
