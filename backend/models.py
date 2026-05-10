class Alpha_Return_Type:
    dates: list[str]

    def __init__(self, dates: list[str]) -> None:
        self.dates = dates

    def to_dict(self):
        return self.__dict__
