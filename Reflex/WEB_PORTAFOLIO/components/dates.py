import datetime

class DateNow:

    def date_now(self):
        
        self.date: str
        
        self.date = datetime.datetime.now()
        
        self.date_str = self.date.strftime("%d-%m-%Y")
        
        return self.date_str

today_date = DateNow()