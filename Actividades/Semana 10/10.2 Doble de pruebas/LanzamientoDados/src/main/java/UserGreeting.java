public class UserGreeting {
    private final UserProfiles profiles ;

    public UserGreeting(UserProfiles profiles) {
        this.profiles = profiles;
    }

    public String formatGreeting(UserId id) {
        return String.format("Hola y bienvenido, %s",
                profiles.fetchNicknameFor(id));
    }
}

class UserProfiles {

    public String fetchNicknameFor(UserId id) {
        return id.name;
    }
}

class UserId {
    public String id;
    public String name;
    public UserId(String id){
        this.id = id;
        this.name = "Juan...";
    }
}
