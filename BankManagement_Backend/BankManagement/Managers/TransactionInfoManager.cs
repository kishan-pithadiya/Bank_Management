using AutoMapper;
using BankManagement.DTO;
using BankManagement.Managers.Interfaces;
using BankManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace BankManagement.Managers
{
    public class TransactionInfoManager : ITransactionInfoManager
    {
        private readonly DB_BankManagementContext _bankManagementContext;
        private readonly IMapper _mapper;
        public TransactionInfoManager(DB_BankManagementContext bankManagementContext, IMapper mapper)
        {
            _bankManagementContext = bankManagementContext;
            _mapper = mapper;
        }

        public async Task<List<TransactionInfoResponseDTO>> GetAllTransactionDetails()
        {
            var transactionInfo = await _bankManagementContext.TransactionInfos.ToListAsync();
            return _mapper.Map<List<TransactionInfoResponseDTO>>(transactionInfo);
        }

        public async Task<List<TransactionInfoResponseDTO>> GetTransactionInfoById(int custId, int accId)
        {
            var cust = _bankManagementContext.Customers.ToList().Find(c => c.CustomerId == custId);
            if (cust != null)
            {
                var transactionsInfo = await _bankManagementContext.TransactionInfos
                .Where(t => t.AccountId == accId)
                .OrderByDescending(t => t.TransactionDate)
                .ToListAsync();
                return _mapper.Map<List<TransactionInfoResponseDTO>>(transactionsInfo);
            }
            return null;         
        }
    }
}
