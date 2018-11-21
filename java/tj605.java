public class tj605{
	public static void main(String[] args){
		boolean flag1 = isHoopy(202);
		boolean flag2 = isFabulous(202);
		System.out.println(flag1);
		System.out.println(flag2);
		if (flag1 && flag2) {
			System.out.println("ping");

		}
		if (flag1 || flag2) {
			System.out.println("pong");
		}
	}
	public static boolean isHoopy(int x) {
		boolean hoopyFlag;
		if (x % 2 == 0){
			hoopyFlag == true;	
		}	
		else{
			hoopyFlag == false;	
		}
		return hoopyFlag;
	}
	public static boolean isFabulous(int x){
		boolean fabulousFlag;
		if (x > 0){
			fabulousFlag = true;	
		}
		else {
			fabulousFlag = false;	
		}
		return fabulousFlag;
	}
}
