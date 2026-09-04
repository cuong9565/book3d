"use client";

import React from "react";
import { Card, CardFooter, Chip, Button } from "@heroui/react";
import { Star, GraduationCap, Rotate3D, Volume2, ChevronDown } from "lucide-react";
import Image from "next/image";

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  grade: string;
  image: string;
  has3D: boolean;
  hasAudio: boolean;
}

const BOOKS: Book[] = [
  {
    id: "1",
    title: "Dinosaur World",
    author: "Dr. Alan Grant",
    category: "Science",
    rating: 4.8,
    grade: "Grade 6-8",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGUEcQKBHtnBV8rS-KWwtCbFlmnv9kL_H66RVctUnSxjk5i7CEqnBlfSvt0UXYprRFAC72F6TufMoMnAC2p63VwNJBHE4CuTx16u-411n6x90z3OshzpFAPFvRaZB-8R-QEjH-wEQInjLUV2GxNDDZLloLBuTl4yjVEoeLgldo3XfA6sWBhF_NQnUgUReilfEzZIdNMmsrMXzKuB1kDRZnwSO-en-pCIcFsUCc2YxP317BI81FhSTkMQ",
    has3D: true,
    hasAudio: true,
  },
  {
    id: "2",
    title: "Cosmic Journeys",
    author: "Carl Sagan Institute",
    category: "Astronomy",
    rating: 4.9,
    grade: "High School",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt19R1POW9OTw3KcEy7iLZCieDQnt9pHzw8FjDK1EGP5bePCAcZ9AoOF-iyt8pmsfW6aML1KZ2oXjQBUUkHYLL5S_YfWedgMER5l72jANEjTjBKRM0yxzCGWbI8AD4DT9nXrJizdaVekTcSLq3Wh-1zfgiot898HFUQ0HGfBxfq5AJAxmMrYqPtVMbe43fUtqKkB58sAdJyv9YMSg9xth7CDm45xgBYn-uvdUHDKyU_xP1qihq1jxFOw",
    has3D: true,
    hasAudio: false,
  },
  {
    id: "3",
    title: "Ancient Rome Virtual",
    author: "Prof. M. Beard",
    category: "History",
    rating: 4.7,
    grade: "Grade 9-12",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwl9shDdAJJflIoeHvgL08xLw1a4geSc69AaolltuxK_G4dBOLWq33diAP1UelGURG853ydwuxWpZ548AuTfstNDdK0YxcWE-VJKSvQY4VYwKgq1QMjCXGMWPK6R0KFB2a1WlJjRysDi4K3C0rfLng32vR--4rXIwYC6MJNNFKtfZWwCDUeggOMUO7YqT-v5DHNTi41zHpouhWLuDGDZuIa-RW-k-_NZ-IaRtiiKgJXcexO2-nZ4wmcw",
    has3D: true,
    hasAudio: true,
  },
  {
    id: "4",
    title: "Human Anatomy",
    author: "MedTech Edu",
    category: "Biology",
    rating: 4.6,
    grade: "College Prep",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUAq3vByrlgTr0fJfQp8cT80hs8EjemMghYZ5eAOuvF2cwE1FWEP8apCezidKApqOF4lMmC48uVJDxXczbpokqrMmY7d-CsXCRgYu4br1GU-k8Axo8hRwDD1Sc0QDmALz6HOs467aJeMW8IMGhlcEV6ANNyJ55nwpPcNt4XjwMzcO3e5JI3NInl66ynj4IpXQyfuYdSXQkv2ey73VMQApH_XOlaU0U32rVzngUCrS24hSEkTegy3Buw",
    has3D: true,
    hasAudio: false,
  },
];

export default function BookGrid() {
  return (
    <div className="max-w-7xl mx-auto px-container-margin flex flex-col items-center gap-8">
      {/* 3-Device Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {BOOKS.map((book) => (
          <Card
            key={book.id}
            className="group bg-surface-container-lowest border border-outline-variant hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
          >
            <Card.Header className="p-0 relative h-48 overflow-hidden">
              <Image
                fill
                alt={book.title}
                className="object-cover rounded-2xl"
                src={book.image}
              />
              <div className="absolute top-2 right-2 flex gap-1 z-10">
                {book.has3D && (
                    <Chip color="success" size="sm" variant="soft">
                        <Rotate3D size={20}  />
                        <Chip.Label>3D</Chip.Label>
                    </Chip>
                )}
                {book.hasAudio && (
                    <Chip color="accent" size="sm" variant="soft">
                        <Volume2 size={20} />
                        <Chip.Label>Audio</Chip.Label>
                    </Chip>
                )}
              </div>
            </Card.Header>

            <Card.Footer className="flex flex-col items-start gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-xs font-semibold text-primary">{book.category}</span>
                <div className="flex items-center gap-1 text-tertiary">
                  <Star className="text-sm fill-current" />
                  <span className="text-xs font-semibold">{book.rating}</span>
                </div>
              </div>

              <h3 className="font-bold text-lg text-on-surface line-clamp-1">{book.title}</h3>
              <p className="text-xs text-on-surface-variant">By {book.author}</p>

              <div className="mt-2 pt-2 border-t border-outline-variant/30 w-full flex items-center gap-1.5 text-xs text-on-surface-variant">
                <GraduationCap className="text-sm" />
                <span>{book.grade}</span>
              </div>
            </Card.Footer>
          </Card>
        ))}
      </div>

      {/* Action Button */}
      <Button size="lg" className="font-medium px-8 my-4">
        Tải thêm sách
        <ChevronDown />
      </Button>
    </div>
  );
}