package condicional;

import java.util.Scanner;

public class Prova {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc = new Scanner(System.in);
		
		double sal_carlos, sal_joao, meses;
		
		meses = 0;
		
		System.out.println("qual o salario do carlos?:");
		sal_carlos = sc.nextDouble();
		
		sal_joao = sal_carlos / 3;
		
		while(sal_joao < sal_carlos) {
			sal_carlos = sal_carlos + (sal_carlos * 0.6/100);
			sal_joao = sal_joao + (sal_joao * 1/100);
			meses = meses + 1;
		}
		
		System.out.printf("demora",meses);
		System.out.println(sal_joao);

	}

}

