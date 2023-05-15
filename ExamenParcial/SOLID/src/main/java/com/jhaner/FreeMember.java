package com.jhaner;

public class FreeMember extends Member{

    public FreeMember(String nombre) {
        super(nombre);
    }

    @Override
    public void joinTournament() {
        System.out.print("...");
    }

}
