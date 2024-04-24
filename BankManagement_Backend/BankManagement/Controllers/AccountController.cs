using BankManagement.DTO;
using BankManagement.Managers;
using BankManagement.Managers.Interfaces;
using BankManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;


namespace BankManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountManager _accountManager;
        private readonly IEnumerable<IGetInterest> _getinterest;
      
        public AccountController(IAccountManager accountManager, IEnumerable<IGetInterest> getinterest)
        {
            _accountManager = accountManager;
            _getinterest = getinterest;
        }

        [HttpGet("GetAllAccount")]
        public async Task<IActionResult> GetAllAccount()
        {
            Log.Information("Getting All Accounts");
            return Ok(await _accountManager.GetAllAccountAsync());
        }

        [HttpGet("GetAccountById")]
        public async Task<IActionResult> GetAcccountbyId(int accountid)
        {
            Log.Information("Getting Account");
            return Ok(await _accountManager.GetAccountByIdAsync(accountid));
        }

        [HttpGet("GetInterestRate")]
        public async Task<IActionResult> GetInterestRate(int typeid)
        {
            Log.Information("Getting InterestRate");
            foreach (var item in _getinterest)
            {
                if (item.id == typeid)
                {
                   var output = await item.GetInterest();   
                    return Ok(output);
                } 
            }
            return BadRequest();
        }


        [HttpPost("CreateAccount")]
        public async Task<IActionResult> CreateAccount(AccountRequestDTO addaccount)
        {
            Log.Information("Create Account");
            return Ok(await _accountManager.CreateAccountAsync(addaccount));   
        }

        [HttpDelete("DeleteAccount")]
        public async Task<IActionResult> Deleteaccount(int accountId)
        {
            Log.Information("Delete Account");
            var deleteaccount = await _accountManager.DeleteAccountAsync(accountId);
            if (deleteaccount != false)
            {
                return Ok("Account Deleted Successfully!");
            }
            return BadRequest($"Account With Account Id: {accountId} Not found!");
        }

        [HttpPost("WithdrawMoney")]
        public async Task<IActionResult> WithdrawMoney(string accountnumber, int amount, int AccountTypeId)
        {
            Log.Information("Withdraw Money");
            var withdraw = await _accountManager.WithdrawMoneyAsync(accountnumber, amount, AccountTypeId);
            if (withdraw != false)
            {
                return Ok($"Money Of Amount: {amount} Withdraw Successfully!");
            }
            return BadRequest("Sorry Can Not Withdraw...Check Your Balance And AccountId!");
        }

        [HttpPost("DepositMoney")]
        public async Task<IActionResult> DepositMoney(string accountnumber, int amount, int AccountTypeId)
        {
            Log.Information("Deposit Money");
            var deposit = await _accountManager.DepositeMoneyAsync(accountnumber, amount, AccountTypeId);
            if (deposit != false)
            {
                return Ok($"Money Of Amount: {amount} Deposit Successfully!");
            }
            return BadRequest("Sorry Can Not Deposit...Check Your AccountType And AccountNumber!");
        }

    }
}
