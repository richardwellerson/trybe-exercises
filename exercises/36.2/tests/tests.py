from posfix_evaluator.operations import plus


def test_two_plus_tree_equals_five():
    assert plus(2, 3) == 5


def test_five_plus_seven_equals_thirteen():
    assert plus(5, 7) == 13


def test_eight_plus_nine_equals_seventeen():
    assert plus(8,9) == 17
