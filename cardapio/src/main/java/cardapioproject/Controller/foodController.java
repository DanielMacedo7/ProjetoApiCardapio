package cardapioproject.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import cardapioproject.Model.food;
import cardapioproject.Repository.foodRepository;
import java.util.List;
import cardapioproject.Dto.foodResponseDto;
import cardapioproject.Dto.foodRequestDto;

@RestController // para criar nossos endpoints
@RequestMapping("food") //endpoint

public class foodController {

    @Autowired
    private foodRepository foods;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody foodRequestDto data) {
    food foodData = new food(data);
    foods.save(foodData);
    }

    // Método para pesquisar todos os atributos da tabela
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<foodResponseDto> getAll() {

    List<foodResponseDto> foodList = foods.findAll().stream().map(foodResponseDto::new).toList();
    return foodList;

    }
/*
    public void remove(long id){
    foods.deleteById(id);

    }
*/



}




/*
    Criamos esse foodResponseDto por que não é seguro ficar transferindo dados diretamente
    da minha entidade então criamos um Record chamado DTO que é = Data Transfer Object,
    é só parar pra pensar que as entidades tem regras de negócio já o DTO não tem.


    no responseDTo transformamos a nossa entidade no DTO já no request transformamos nosso
    DTO na entidade para passar os dados do cliente


    stream() = funil
    map() = para cada objeto que vier dentro do Do funil iremos criar um DTO.

 */


