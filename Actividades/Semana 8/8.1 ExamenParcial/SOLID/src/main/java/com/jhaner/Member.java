package com.jhaner;

public abstract class Member {
    private final String name;
    public Member(String nombre) {
        this.name = nombre;
    }
    public abstract void joinTournament();

}