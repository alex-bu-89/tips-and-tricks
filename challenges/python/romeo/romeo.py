# Open the file romeo.txt and read it line by line.
# For each line, split the line into a list of words
# using the split() method. The program should build
# a list of words. For each word on each line check
# to see if the word is already in the list and if not
# append it to the list. When the program completes,
# sort and print the resulting words in alphabetical order.

from typing import IO

# Define constants
FILE_NAME: str = "./romeo.txt"

#
# Returns list of strings from given text file
#
def get_words_from_file(file: IO) -> list:
    words: list = []

    for line in file:
        word: list = line.split()
        words += word

    return words

#
# Removes dublicates from given list
#
def remove_duplicates_from_list(words: list) -> list:
    words_set = set([])
    
    for word in words:
        words_set.add(word)

    # Convert to list
    return list(words_set)

#
# Sorts list alphabetical
#
def sort_list_asc(words: list) -> list:
    words.sort()
    
    return words

#
# Main method
#
def main() -> None:
    # read the file
    file: IO = open(FILE_NAME)

    words = get_words_from_file(file)
    words_uniq = remove_duplicates_from_list(words)
    words_sorted = sort_list_asc(words_uniq)
    print(words_sorted)

# Run app
main()