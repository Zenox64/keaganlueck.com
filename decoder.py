def decode(message_file):
    # Read the file and parse the lines into a list of tuples (number, word)
    with open(message_file, 'r') as file:
        lines = file.readlines()

    # Parse the input lines into a dictionary
    word_dict = {}
    for line in lines:
        num, word = line.split()
        word_dict[int(num)] = word

    # Find the end indices of each line in the pyramid structure
    end_indices = []
    total_numbers = len(word_dict)
    level = 1
    while total_numbers > 0:
        total_numbers -= level
        if total_numbers >= 0:
            end_indices.append(level * (level + 1) // 2)
        level += 1

    # Extract the words corresponding to the end indices
    decoded_words = []
    for index in end_indices:
        if index in word_dict:
            decoded_words.append(word_dict[index])

    # Join the decoded words into a single string
    return ' '.join(decoded_words)

# Example usage:
# Replace 'path_to_file' with the actual path to the file
print(decode('coding_qual_input.txt'))
