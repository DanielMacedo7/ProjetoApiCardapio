package cardapioproject.Repository;

import cardapioproject.Model.food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface foodRepository extends JpaRepository<food, Long> {



}
