/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package obligatorio4;
import java.util.Scanner;
/**
 *
 * @author caval
 */
public class Obligatorio4 
{

    public static void main(String[] args) 
    {          
    
        Scanner leer=new Scanner(System.in);
        
        String nombre, apellido, edad, hobbie, editor, sistema ;
        
        
        System.out.println("Ingrese Nombre: ");
        nombre=leer.nextLine();
        
        System.out.println("Ingrese Apellido: ");
        apellido=leer.nextLine();
        
        System.out.println("Ingrese Edad: ");
        edad=leer.nextLine();
             
        System.out.println("Ingrese su Hobbie: ");
        hobbie=leer.nextLine();
        
        System.out.println("Ingrese su Editor de Codigo Preferido: ");
        editor=leer.nextLine();
        
        System.out.println("Ingrese su Sistema Operativo: ");
        sistema=leer.nextLine();
        
        System.out.println("Sus datos son: nombre y apellido " +nombre+ " "+apellido+ 
                ", edad " +edad+ ", hobbie es " +hobbie+ ", editor de código preferido es " +editor+ 
                " y el sistema operativo es " +sistema);
                  
                                                  
          
       
        
    }
    
    
}
