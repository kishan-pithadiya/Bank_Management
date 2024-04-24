using AutoMapper;
using BankManagement.Models;

namespace BankManagement.DTO
{
    public class MapHelper : Profile
    {
        public MapHelper()
        {
            CreateMap<Customer, CustomerResponseDTO>().ReverseMap(); 
            CreateMap<CustomerRequestDTO, Customer>().ReverseMap();
            CreateMap<Account, AccountRequestDTO>().ReverseMap();
            CreateMap<Account, AccountResponseDTO>().ReverseMap();
            CreateMap<TransactionInfo, TransactionInfoResponseDTO>().ReverseMap();
        }
    }
}
