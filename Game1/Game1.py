pip install playsound==1.2.2
from tkinter import *
#import tkSnack
import random
from tkinter import messagebox
from playsound import playsound
root=Tk()
root.geometry("500x500")

# create matches
matches = ['./1.mp3','./1.mp3','./2.mp3','./2.mp3','./3.mp3','./3.mp3','./4.mp3','./4.mp3','./5.mp3','./5.mp3','./6.mp3','./6.mp3']

abc = ['1','1','2','2','3','3','4','4','5','5','6','6']
# Shuffle our matches
random.shuffle(matches)

# Creating button frame
my_frame =Frame(root)
my_frame.pack(pady=10)

#Define varibale
count=0
answer_list=[]
answer = []
answer_dict={}
# Function for clicking buttons
def button_click(b, number):
    global count, answer_list ,answer_dict

    if b["text"]=='' and count < 2:
        b["text"] = abc[number]
        playsound(matches[number])
        answer_list.append(number)
        answer.append(b)
        answer_dict[b] = matches[number]
        count += 1

    if(len(answer_list) == 2):
        if matches[answer_list[0]] == matches[answer_list[1]]:
            my_label.config(text="Match!")
            for key in answer_dict:
                key["state"] = "disable"
            count = 0
            answer_list = []
            answer_dict = {}
        else:
            my_label.config(text="DOH !")
            count = 0
            answer_list = []

            messagebox.showinfo("Incorrect","Incorrect")

            #Reset the buttons
            for key in answer_dict:
                key["text"] = ""
            answer_dict = {}
