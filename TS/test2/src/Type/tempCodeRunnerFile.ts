  {
    enum Day { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY }
    function work(d: Day) {
      switch (d) {
        case Day.SUNDAY:
        case Day.SATURDAY:
          return 'take a rest';
        case Day.MONDAY:
        case Day.TUESDAY:
        case Day.WEDNESDAY:
        case Day.THURSDAY:
        case Day.FRIDAY:
          return 'work hard';
      }
    }
    console.log(work(Day.SATURDAY))
    console.log(work(5));
    console.log(work(8));
  }