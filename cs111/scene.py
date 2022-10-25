# Import the functions from the Draw 2-D library
# so that they can be used in this program.
import draw2d

from draw2d import \
    start_drawing, draw_line, draw_oval, draw_arc, \
    draw_rectangle, draw_polygon, draw_text, finish_drawing


def main():
    # Width and height of the scene in pixels
    scene_width = 800
    scene_height = 500

    # Call the start_drawing function in the draw2d.py
    # library which will open a window and create a canvas.
    canvas = start_drawing("Scene", scene_width, scene_height)

    # Call your drawing functions such
    # as draw_sky and draw_ground here.
    draw_grid(canvas, scene_width, scene_height)


    # Call the finish_drawing function
    # in the draw2d.py library.
    finish_drawing(canvas)


# Define your functions such as
# draw_sky and draw_ground here.
def draw_grid(canvas, width, height):
    # Draw vertical lines
    draw_line(canvas, 30, 0, 30, height)
    draw_line(canvas, 60, 0, 60, height)
    draw_line(canvas, 90, 0, 90, height)

# Call the main function so that
# this program will start executing.
main()