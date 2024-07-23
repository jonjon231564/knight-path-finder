# knight-path-finder
The Odin Project knight path finder project


Knight's Path Finder
This project calculates the shortest path(s) for a knight on a chessboard to move from a starting position to a destination. It uses a breadth-first search (BFS) algorithm to determine the minimum number of moves and all possible paths in the least number of moves.

Features
Calculates the minimum number of moves a knight needs to reach from a starting position to a destination on an 8x8 chessboard.
Provides all possible paths that achieve the minimum number of moves.
Uses an adjacency list to represent the chessboard and the possible moves a knight can make from each position.
Efficiently finds the shortest path(s) using BFS.
Usage
Functions
arraysEqual(a, b): Checks if two arrays are equal.
moves(array): Returns the valid knight moves from a given position on the chessboard.
knightMoves(knightStart, knightDestination): Finds and returns all shortest paths for a knight to move from the start to the destination.
Example
knightMoves([0, 0], [7, 7]);

This example will calculate and print all the shortest paths for a knight to move from the top-left corner (a1) to the bottom-right corner (h8) on a chessboard.

How It Works
Initialization:

chessBoard is an 8x8 grid represented as an array of coordinates.
adjacencyList is generated by calculating valid knight moves for each position on the chessboard.
Move Calculation:

The moves(array) function computes all valid knight moves from a given position and filters out invalid positions (off the board).
Path Finding:

The knightMoves(knightStart, knightDestination) function uses BFS to explore all possible paths from the start to the destination.
Paths are stored and extended iteratively until the destination is reached.
When the destination is reached, all shortest paths are printed and returned.
Output
The function prints the number of moves and the paths taken for the knight to reach the destination in the shortest number of moves.
Example output:
You made it in 6 moves! Here's your paths:
[[[0, 0], [2, 1], [4, 2], [6, 3], [4, 4], [6, 5], [7, 7]], ... ]
