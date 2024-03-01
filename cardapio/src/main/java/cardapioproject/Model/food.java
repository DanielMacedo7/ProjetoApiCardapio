package cardapioproject.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import cardapioproject.Dto.foodRequestDto;

@Table(name = "food")
@Entity(name = "food")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class food {


 @Id @GeneratedValue(strategy = GenerationType.IDENTITY) // para o id ser auto incrementavel..
 private long id;

 private String title;

 private String image;

 private int price;

 //com esse construtor poderemos passar os dados da transformação do DTO para entidade no save
 public food(foodRequestDto data){
 this.title = data.title();
 this.image = data.image();
 this.price = data.price();

 }


}
/*
    As anotações do loombok servem para criar as estruturas padrão de uma entidade, que no caso
    seria o Construtor, getters e setters e o equalsAndHashcode...
    e isso sempre fica na models!!!!!!!!!


 */