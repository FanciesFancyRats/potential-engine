public class tj403 {
	public static void main(String[] args){
		String day, month;
		int date, year;	
		day = "Tuesday";
		month = "Nov";
		date = 13;
		year = 2018;
		amer(day, date, month, year);
		eur(day, date, month, year);
	}
	public static void amer(String day, int date, String month, int year){
		System.out.println(day + ", " + month + " " + date + " " + year);
	}
	public static void eur(String day, int date, String month, int year){
		System.out.println(day + ", " +	date + " " + month + " " + year);
	}


}
