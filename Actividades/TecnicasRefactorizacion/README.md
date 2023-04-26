## Ejercico 9 Move Method

`https://refactoring.com/catalog/moveFunction.html`

``` java
class Class1 {

    public void aMethod()
    {
        //...
    }
}

class Class2 {

}
```

**Refactorizacion**

``` java
class Class1 {

}

class Class2 {

    public void aMethod()
    {
        //...
    }
}
```

## Ejercicio 10 Hide Delegate

`https://refactoring.com/catalog/hideDelegate.html`

``` java
class Client{

    public Client(){
        Person person = new Person();
        Manager = person.getDepartament().getManager();
    }
}
```

**Refactorizacion**

``` java
class Client{

    public Client(){
        Person person = new Person();
        Manager = person.getManager();
    }
}

class Person(){

    public Manager getManager(){
        return this.getDepartament().getManager();
    }
}
```