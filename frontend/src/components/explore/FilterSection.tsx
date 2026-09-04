"use client";

import { Select, Label, ListBox, Card, SearchField } from "@heroui/react";

export default function FilterSection() {
  return (
    <div className="max-w-7xl mx-auto px-container-margin ">

        <Card className="bg-surface-container-lowest border border-outline-variant shadow-sm p-2 sm:p-4 rounded-2xl mb-8">
            {/* Main Search Input */}
            <SearchField name="search">
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Tìm kiếm theo tiêu đề, tác giả hoặc từ khóa..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>

            {/* Filter Dropdowns Grid */}
            <Card.Footer className="gap-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                    {/* Category */}
                    <Select className="" placeholder="Tất cả thể loại" selectionMode="multiple">
                        <Label>Thể loại</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox selectionMode="multiple">
                                <ListBox.Item id="science" textValue="Khoa học & Thiên nhiên">Khoa học & Thiên nhiên<ListBox.ItemIndicator /></ListBox.Item>
                                <ListBox.Item id="history" textValue="Lịch sử">Lịch sử<ListBox.ItemIndicator /></ListBox.Item>
                                <ListBox.Item id="math" textValue="Toán học">Toán học<ListBox.ItemIndicator /></ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    {/* Sắp xếp */}
                    <Select className="" placeholder="Phổ biến nhất" defaultValue="pop" >
                        <Label>Thể loại</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox selectionMode="multiple">
                                <ListBox.Item id="pop" textValue="Phổ biến nhất">Phổ biến nhất<ListBox.ItemIndicator /></ListBox.Item>
                                <ListBox.Item id="new" textValue="Mới nhất">Mới nhất<ListBox.ItemIndicator /></ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>
            </Card.Footer>
        </Card>
    </div>
  );
}