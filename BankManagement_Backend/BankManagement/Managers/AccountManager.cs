using AutoMapper;
using BankManagement.DTO;
using BankManagement.Managers.Interfaces;
using BankManagement.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Security.Principal;

namespace BankManagement.Managers
{
    public class AccountManager : IAccountManager
    {
        private readonly DB_BankManagementContext _context;
        private readonly IMapper _mapper;

        public AccountManager(DB_BankManagementContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<List<AccountResponseDTO>> GetAllAccountAsync()
        {
            var accounts = await _context.Accounts.ToListAsync();
            return _mapper.Map<List<AccountResponseDTO>>(accounts);
        }

        public async Task<AccountResponseDTO> GetAccountByIdAsync(int accountId)
        {
            var account = await _context.Accounts.FirstOrDefaultAsync(a => a.AccountId == accountId);
            return _mapper.Map<AccountResponseDTO>(account);
        }

        public async Task<string> CreateAccountAsync(AccountRequestDTO newaccount)
        {
            if (newaccount != null)
            {
                if (newaccount.AccountTypeId != 1 && newaccount.AccountTypeId != 2)
                {
                    return "Invalid input : AccountTypeId must be 1 for saving or 2 for current";
                }
                if (newaccount.AccountBalance < 0)
                {
                    return "Invalid input balance : Balance must be positive";
                }

                int n = CheckAccountExistOrNot((int)newaccount.CustomerId, (int)newaccount.AccountTypeId);
                if (n != 1)
                {
                    var naccount = _mapper.Map<Account>(newaccount);
                    naccount.AccountNumber = await GenerateUniqueAccountNumberAsync();
                    _context.Accounts.Add(naccount);
                    await _context.SaveChangesAsync();
                    return "Account Created Successfully";
                }
               
                 return "Account Already Exist";
                
            }
            return "Invalid input: Account ";
        }


        

        public async Task<bool> DeleteAccountAsync(int accountId)
        {
            var accountToDelete = await _context.Accounts.FirstOrDefaultAsync(a => a.AccountId == accountId);

            if (accountToDelete != null)
            {
                _context.Accounts.Remove(accountToDelete);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<bool> WithdrawMoneyAsync(string accountnumber, int amount, int AccountTypeId)
        {
            var acc = await _context.Accounts.FirstOrDefaultAsync(a => a.AccountNumber == accountnumber);

            if (acc != null)
            {
                int n = WithDrawMoney(accountnumber, amount, AccountTypeId);
                if (n != 0)
                {
                    var transactioninfo = new TransactionInfo
                    {
                        AccountId = acc.AccountId,
                        TransactionType = "Withdrawal",
                        Amount = amount,
                        TransactionDate = DateTime.UtcNow
                    };
                    _context.TransactionInfos.Add(transactioninfo);
                    await _context.SaveChangesAsync();
                    return true;
                }
                return false;
            }
            return false;
        }

        public async Task<bool> DepositeMoneyAsync(string accountnumber, int amount, int AccountTypeId)
        {
            var acc = await _context.Accounts.FirstOrDefaultAsync(a => a.AccountNumber == accountnumber);
            if (acc != null)
            {
                int n = DepositMoney(accountnumber, amount, AccountTypeId);
                if (n == 1)
                {
                    var transactioninfo = new TransactionInfo
                    {
                        AccountId = acc.AccountId,
                        TransactionType = "Deposit",
                        Amount = amount,
                        TransactionDate = DateTime.UtcNow
                    };
                    _context.TransactionInfos.Add(transactioninfo);
                    await _context.SaveChangesAsync();
                    return true;
                }
                return false;
            }
            return false;
        }

        private int CheckAccountExistOrNot(int customerID, int accountTypeId)
        {
            var param = new SqlParameter[] {

                new SqlParameter(){
                    ParameterName = "@CustomerID",
                    SqlDbType = System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Input,
                    Value = customerID,
                },

                new SqlParameter(){
                    ParameterName = "@AccountTypeID",
                    SqlDbType= System.Data.SqlDbType.Int,           
                    Direction = System.Data.ParameterDirection.Input,
                    Value = accountTypeId,
                },

                new SqlParameter(){
                    ParameterName = "@is_exist",
                    SqlDbType = System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Output
                }
            };

            var query = $"EXEC CheckAccountExistOrNot @CustomerID, @AccountTypeID, @is_exist OUT";
            _context.Database.ExecuteSqlRaw(query, param.ToArray());
            var output = int.Parse(param[2].Value.ToString());
            return output;
        }

        private int WithDrawMoney(string accountnumber, int amount, int accountTypeId)
        {
            var param = new SqlParameter[] {
                //@AccountNumber, @Amount, @AccountTypeId
                new SqlParameter(){
                    ParameterName = "@AccountNumber",
                    SqlDbType = System.Data.SqlDbType.NVarChar,
                    Direction = System.Data.ParameterDirection.Input,
                    Value = accountnumber,
                },

                new SqlParameter(){
                    ParameterName = "@Amount",
                    SqlDbType= System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Input,
                    Value = amount,
                },

                new SqlParameter(){
                    ParameterName = "@AccountTypeId",
                    SqlDbType= System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Input,
                    Value = accountTypeId,
                },

                 new SqlParameter(){
                    ParameterName = "@result",
                    SqlDbType = System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Output
                }
            };

            var query = $"EXEC WithdrawMoney @AccountNumber, @Amount, @AccountTypeId, @result OUT";
            _context.Database.ExecuteSqlRaw(query, param.ToArray());
            var output = int.Parse(param[3].Value.ToString());
            return output;
        }

        private int DepositMoney(string accountnumber, int amount, int accountTypeId)
        {
            var param = new SqlParameter[] {
                //@AccountNumber, @Amount, @AccountTypeId
                new SqlParameter(){
                    ParameterName = "@AccountNumber",
                    SqlDbType = System.Data.SqlDbType.NVarChar,
                    Direction = System.Data.ParameterDirection.Input,
                    Value = accountnumber,
                },

                new SqlParameter(){
                    ParameterName = "@Amount",
                    SqlDbType= System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Input,
                    Value = amount,
                },

                new SqlParameter(){
                    ParameterName = "@AccountTypeId",
                    SqlDbType= System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Input,
                    Value = accountTypeId,
                },

                 new SqlParameter(){
                    ParameterName = "@result",
                    SqlDbType = System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Output
                }
            };

            var query = $"EXEC DepositMoney @AccountNumber, @Amount, @AccountTypeId, @result OUT";
            _context.Database.ExecuteSqlRaw(query, param.ToArray());
            var output = int.Parse(param[3].Value.ToString());
            return output;
        }

        private async Task<string> GenerateUniqueAccountNumberAsync()
        {
            string generatedAccountNumber;
            do
            {
                generatedAccountNumber = GenerateAccountNumber();
            } while (await AccountNumberExistsAsync(generatedAccountNumber));

            return generatedAccountNumber;
        }

        private string GenerateAccountNumber()
        {
            Random random = new Random();
            int NineDigits = random.Next(100000000, 999999999);
            string accountnumber = $"{NineDigits:D9}{random.Next(100,999)}";
            return accountnumber;
        }

        private async Task<bool> AccountNumberExistsAsync(string accountNumber)
        {
            return await _context.Accounts.AnyAsync(a => a.AccountNumber == accountNumber);
        }
    }
}

