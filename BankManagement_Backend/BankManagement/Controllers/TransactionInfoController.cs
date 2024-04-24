using BankManagement.Managers.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace BankManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionInfoController : ControllerBase
    {
        private readonly ITransactionInfoManager _transactionInfoManager;

        public TransactionInfoController(ITransactionInfoManager transactionInfoManager)
        {
            _transactionInfoManager = transactionInfoManager;
        }

        [HttpGet("GetAllTransactionInfo")]
        public async Task<IActionResult> GetallTransactionInfo()
        {
            Log.Information("Getting TransactionInfo");
            return Ok(await _transactionInfoManager.GetAllTransactionDetails());
        }

        [HttpGet("GetCustomerTransactionInfo")]
        public async Task<IActionResult> GetCustomerTransactionInfo(int custId, int accId)
        {
            Log.Information("Getting Customer TransactionInfo");
            var custTransInfo = await _transactionInfoManager.GetTransactionInfoById(custId, accId);
            if(custTransInfo != null)
            {
                return Ok(await _transactionInfoManager.GetTransactionInfoById(custId, accId));
            }
            return BadRequest($"CustomerId: {custId} Can Not Be Found!");
        }
    }
}
