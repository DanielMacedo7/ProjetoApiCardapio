package cardapioproject.Dto;

import cardapioproject.Model.food;
import cardapioproject.Dto.foodResponseDto;

// esse record representará dados que virão do servidor

public record foodResponseDto(Long id, String title, String image, int price) {


    public foodResponseDto(food food) {
        this(food.getId(),food.getTitle(), food.getImage(),food.getPrice());



    }


}
