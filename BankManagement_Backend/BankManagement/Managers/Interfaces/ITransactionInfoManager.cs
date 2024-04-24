using BankManagement.DTO;

namespace BankManagement.Managers.Interfaces
{
    public interface ITransactionInfoManager
    {
        Task<List<TransactionInfoResponseDTO>> GetAllTransactionDetails();
        Task<List<TransactionInfoResponseDTO>> GetTransactionInfoById(int custId, int accId);
    }
}