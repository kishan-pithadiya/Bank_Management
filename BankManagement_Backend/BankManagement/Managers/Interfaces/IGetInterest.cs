namespace BankManagement.Managers.Interfaces
{
    public interface IGetInterest
    {
        public int id { get;}
        Task<AccountType> GetInterest();
    }
}