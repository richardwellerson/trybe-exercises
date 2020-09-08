def bigger_height_and_weight(height, weight):
    if height > 2000 or weight > 2100:
        return "Invalid Size"
    return "Valid Size"


print(bigger_height_and_weight(2100, 1990))
print(bigger_height_and_weight(1990, 2101))
print(bigger_height_and_weight(2000, 2000))
print(bigger_height_and_weight(1600, 2400))
print(bigger_height_and_weight(1660, 2099))
