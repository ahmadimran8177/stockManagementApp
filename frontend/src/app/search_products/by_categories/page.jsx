"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import details from '@/details/details'
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Page = () => {

    const router = useRouter();

    const FormSchema = z.object({
        brand: z.string().optional(),
        size: z.string().optional(),
        border: z.string().optional(),
        print: z.string().optional(),
        condition: z.string().optional(),
        lot: z.string().optional(),
        weight: z.string().optional(),
        color: z.string().optional(),
        warehouse: z.string().optional(),
        stock: z.string().optional(),
        brandException: z.string().optional(),
    })

    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data) {
        let query;
        if (data?.brand) {
            if (!query) {
                query = "brand=" + data?.brand;
            } else {
                query = query + "&brand=" + data?.brand;
            }
        }
        if (data?.size) {
            if (!query) {
                query = "size=" + data?.size;
            } else {
                query = query + "&size=" + data?.size;
            }
        }
        if (data?.border) {
            if (!query) {
                query = "border=" + data?.border;
            } else {
                query = query + "&border=" + data?.border;
            }
        }
        if (data?.print) {
            if (!query) {
                query = "print=" + data?.print;
            } else {
                query = query + "&print=" + data?.print;
            }
        }
        if (data?.condition) {
            if (!query) {
                query = "condition=" + data?.condition;
            } else {
                query = query + "&condition=" + data?.condition;
            }
        }
        if (data?.lot) {
            if (!query) {
                query = "lot=" + data?.lot;
            } else {
                query = query + "&lot=" + data?.lot;
            }
        }
        if (data?.weight) {
            if (!query) {
                query = "weight=" + data?.weight;
            } else {
                query = query + "&weight=" + data?.weight;
            }
        }
        if (data?.color) {
            if (!query) {
                query = "color=" + data?.color;
            } else {
                query = query + "&color=" + data?.color;
            }
        }
        if (data?.warehouse) {
            if (!query) {
                query = "warehouse=" + data?.warehouse;
            } else {
                query = query + "&warehouse=" + data?.warehouse;
            }
        }
        if (data?.stock) {
            if (!query) {
                query = "stock=" + data?.stock;
            } else {
                query = query + "&stock=" + data?.stock;
            }
        };
        if (data?.brandException) {
            if (!query) {
                query = "brandException=" + data?.brandException;
            } else {
                query = query + "&brandException=" + data?.brandException;
            }
        };
        if (!query) {
            router.push(`/products`);
        } else {
            router.push(`/products?${query}`);
        }
    }

    return (
        <Form {...form}>
            <div className="w-full flex justify-center items-center">
                <form className="w-[90%] lg:w-[50%] flex justify-center items-center space-y-6 flex-col py-4 lg:py-10" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="w-full flex justify-center items-center flex-col md:flex-row space-y-4 lg:space-y-0 lg:space-x-4 pb-8 lg:pb-4">
                        <div className="w-full lg:w-1/2 space-y-4">
                            <FormField
                                control={form.control}
                                name="brand"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Brand" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.brand?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="size"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Size" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.size?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="border"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Border" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.border?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="print"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Print" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.print?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="condition"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Condition" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.condition?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="brandException"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Brand Exception" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.brandException?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-4">
                            <FormField
                                control={form.control}
                                name="lot"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Lot" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.lot?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Weight" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.weight?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="color"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Colour" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.color?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="warehouse"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Warehouse" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.warehouse?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="stock"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Stock</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Minimum Stock" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {details?.stock?.map((item, i) => (
                                                    <SelectItem key={i} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {/* <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <Button className="w-full" type="submit">Submit</Button>
                </form>
            </div>
        </Form>
    )
}

export default Page;