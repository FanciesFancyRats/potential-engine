public class tj506 {
	public static void baffle(String blimp){
		System.out.println(blimp);//4
		zippo("ping", -5);//5	
	}
	
	public static void zippo(String quince, int flag){
		if (flag < 0){
			System.out.println(quince + " zoop");//6
		}	
		else{
			System.out.println("jk");//2
			baffle(quince);//3
			System.out.println("bwaha-ha");//7
		}
	}
	public static void main(String[] args) {
		zippo("rattle", 13);	//1
		System.out.println("Expected output:");
		System.out.println("jk");
		System.out.println("rattle");
		System.out.println("ping zoop");
		System.out.println("bwaha-ha");
	}

}

