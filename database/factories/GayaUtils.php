<?php

class GayaUtils {

    public function getRandomLayout() {
        return $this->randomEntry('layouts');
    }

    public function getRandomCardType() {
        return $this->randomEntry('card_types');
    }

    public function getRandomPremiumEffect() {
        return $this->randomEntry('premium_effects');
    }

    public function  getRandomRarity() {
        return $this->randomEntry('rarities');
    }

    public function getRandomCost() {
        $r = rand(0, 100);
        if ($r < 30) {
            $c = 0;
        } elseif (30 <= $r && $r< 55) {
            $c = 1;
        } elseif (55 <= $r && $r < 75) {
            $c = 2;
        } elseif (75 <= $r && $r < 90) {
            $c = 3;
        } else {
            $c = rand(4, 10);
        }
        return $c;
    }

    public function randomEntry($key) {
        return array_rand(config("gaya.drop_downs.$key"));
    }
}
