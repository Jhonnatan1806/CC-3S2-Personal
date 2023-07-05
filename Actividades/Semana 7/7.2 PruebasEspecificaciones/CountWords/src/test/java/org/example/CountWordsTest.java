package org.example;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;


class CountWordsTest {

    @Test
    void twoWordsEndingWithS() {   // 1
        int words = new CountWords().count("dog cat");
        assertThat(words).isEqualTo(2);
    }
    @Test
    void noWordsAtAll() {  // 2
        int words = new CountWords().count("dog cat");
        assertThat(words).isEqualTo(0);
    }

}