package com.jhaner;

public class VipMember extends Member implements TournamentStaff {

    public VipMember(String nombre) {
        super(nombre);
    }

    @Override
    public void joinTournament() {
        System.out.print("...");
    }

    @Override
    public void organizeTournament() {
        System.out.print("...");
    }

}
