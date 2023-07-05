package org.example;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

public class NumberUtilsNonSystematicTest {
    @Test
    void t1() {
        assertThat(new NumberUtils().add(numbers(1), numbers(1)))
                .isEqualTo(numbers(2));

        assertThat(new NumberUtils().add(numbers(1, 5), numbers(1, 0)))
                .isEqualTo(numbers(2, 5));

        assertThat(new NumberUtils().add(numbers(1, 5), numbers(1, 5)))
                .isEqualTo(numbers(3, 0));

        assertThat(new NumberUtils().add(numbers(5, 0, 0), numbers(2, 5, 0)))
                .isEqualTo(numbers(7, 5, 0));
    }

    @Test
    void EmptyOrNullTest(){
        assertThat(new NumberUtils().add(null, numbers(1,2,3))).isEqualTo(null); // t1
        assertThat(new NumberUtils().add(numbers(0), numbers(1))).isEqualTo(numbers(1)); // t2
        assertThat(new NumberUtils().add(numbers(1,2,3),null)).isEqualTo(null); // t3
        assertThat(new NumberUtils().add(numbers(1),numbers(0))).isEqualTo(numbers(1)); // t4
    }

    @Test
    void addOneValueTest(){
        assertThat(new NumberUtils().add(numbers(4), numbers(2))).isEqualTo(numbers(6)); // t5
        assertThat(new NumberUtils().add(numbers(6), numbers(8))).isEqualTo(numbers(1,4)); //t6
    }

    @Test
    void addMultipleValueTest(){
        assertThat(new NumberUtils().add(numbers(1,2,3), numbers(4,5,6))).isEqualTo(numbers(5,7,9)); // t7
        assertThat(new NumberUtils().add(numbers(1,2,4), numbers(4,5,6))).isEqualTo(numbers(5,8,0)); // t8
        assertThat(new NumberUtils().add(numbers(1,2,1),numbers(2,9,2))).isEqualTo(numbers(4,1,3)); // t9
        assertThat(new NumberUtils().add(numbers(1,2,2,2),numbers(1,9,9,9))).isEqualTo(numbers(3,2,2,1)); // t10
        assertThat(new NumberUtils().add(numbers(1,4,1,4),numbers(1,8,1,8))).isEqualTo(numbers(3,2,3,2)); // t11
        assertThat(new NumberUtils().add(numbers(1,1,1,1),numbers(1,8,8,9))).isEqualTo(numbers(3,0,0,0)); // t12
    }



    @Test
    void leftZerosTest(){
        assertThat(new NumberUtils().add(numbers(0,0,1), numbers(0,1,2))).isEqualTo(numbers(1,3)); // t19 real expect -> 0,1,3
        assertThat(new NumberUtils().add(numbers(0,0,4), numbers(0,1,8))).isEqualTo(numbers(2,2)); // t20 real expect -> 0,2,2
    }

    @Test
    void limitsTest(){
        assertThat(new NumberUtils().add(numbers(9,9), numbers(1))).isEqualTo(numbers(1,0,0)); // t21
    }

    private static List<Integer> numbers(int... nums) {
        List<Integer> list = new ArrayList<>();
        for (int n : nums)
            list.add(n);
        return list;
    }
}
