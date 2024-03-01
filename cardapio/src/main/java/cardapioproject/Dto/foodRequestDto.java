package cardapioproject.Dto;
import cardapioproject.Model.food;
import cardapioproject.Dto.foodRequestDto;

// esse Dto será responsável pelos dados que chegam do meu cliente.

public record foodRequestDto(String title, String image, int price) {



}

