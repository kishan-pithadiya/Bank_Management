using BankManagement.Managers.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BankManagement.Managers
{
    public class CurrentManager : IGetInterest
    {
        private DB_BankManagementContext _context;
        public int id { get { return 2; } }
        public CurrentManager(DB_BankManagementContext context)
        {
            _context = context;
        }
        public async Task<AccountType> GetInterest()
        {
            AccountType output = await _context.AccountTypes.FirstOrDefaultAsync(i => i.AccountTypeName == "Current");
            return output;
        }

    }
}
