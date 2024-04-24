using BankManagement.DTO;

namespace BankManagement.Managers.Interfaces
{
    public interface IAccountManager
    {
        Task<string> CreateAccountAsync(AccountRequestDTO newaccount);
        Task<bool> DeleteAccountAsync(int accountId);
        Task<AccountResponseDTO> GetAccountByIdAsync(int accountId);
        Task<List<AccountResponseDTO>> GetAllAccountAsync();
        Task<bool> WithdrawMoneyAsync(string accountnumber, int amount, int accountId);
        Task<bool> DepositeMoneyAsync(string accountnumber, int amount, int accountId);
    }
}