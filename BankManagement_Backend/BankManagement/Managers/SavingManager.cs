using BankManagement.Managers.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Runtime.InteropServices;

namespace BankManagement.Managers
{
    public class SavingManager : IGetInterest
    {
        private DB_BankManagementContext _context;
        public int id { get { return 1; } }
        public SavingManager(DB_BankManagementContext context)
        {
            _context = context;
        }
        public async Task<AccountType> GetInterest()
        {
            AccountType output = await _context.AccountTypes.FirstOrDefaultAsync(i=>i.AccountTypeName == "Saving");
            return output;  
        }

    }
}
