using AutoMapper;
using BankManagement.DTO;
using BankManagement.Managers;
using BankManagement.Managers.Interfaces;
using BankManagement.Models;
using Serilog;

namespace BankManagement
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddAutoMapper(typeof(MapHelper));

            builder.Services.AddScoped<ICustomerManager, CustomerManager>();
            builder.Services.AddScoped<IAccountManager, AccountManager>();
            builder.Services.AddScoped<ITransactionInfoManager, TransactionInfoManager>();
            builder.Services.AddScoped<IGetInterest, SavingManager>();
            builder.Services.AddScoped<IGetInterest, CurrentManager>();
            builder.Services.AddDbContext<DB_BankManagementContext>();
            Log.Logger = new LoggerConfiguration()
            .WriteTo.File(@"C:\Users\kishan.pithadiya\source\repos\BankManagement\BankManagement\BankLogs.txt")
            .CreateLogger();


            var app = builder.Build();

            app.UseCors(builder =>
            {
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            });

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}